<?php
header('Content-Type: application/json');

$requestData = json_decode(file_get_contents("php://input"), true);

if ($requestData === null) {
    http_response_code(400); // Bad Request
    echo json_encode(['error' => 'درخواست نامعتبر. داده‌های JSON نامعتبر.']);
    exit;
}

$uploadDir = "uploads/";

if (isset($requestData['image']) && $requestData['image']['error'] == 0) {
    $allowed_file_types = array('jpg', 'jpeg', 'png', 'gif');
    $file_name = basename($requestData['image']['name']);
    $file_tmp = $requestData['image']['tmp_name'];
    $file_type = strtolower(pathinfo($file_name, PATHINFO_EXTENSION));

    if (in_array($file_type, $allowed_file_types)) {
        $new_file_name = uniqid() . "_" . $file_name;
        $destination = $uploadDir . $new_file_name;

        if (move_uploaded_file($file_tmp, $destination)) {
            $response = [
                'message' => 'فایل با موفقیت آپلود شد.',
                'file_name' => $new_file_name,
                'file_path' => $destination,
            ];
            echo json_encode($response);
        } else {
            $response = ['error' => 'خطا در آپلود فایل.'];
            http_response_code(500);
            echo json_encode($response);
        }
    } else {
        $response = ['error' => 'نوع فایل مجاز نیست.'];
        http_response_code(400);
        echo json_encode($response);
    }
}

if (isset($requestData['text'])) {
    $text = htmlspecialchars($requestData['text']);
    $response = ['message' => 'متن: ' . $text];
    echo json_encode($response);
}

if (!isset($requestData['image']) && !isset($requestData['text'])) {
    $response = ['error' => 'هیچ داده‌ای ارسال نشده است.'];
    http_response_code(400);
    echo json_encode($response);
}

?>
