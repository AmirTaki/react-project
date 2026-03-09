<?php
header('Content-Type: application/json'); // برای ارسال پاسخ JSON

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $uploadDir = "uploads/"; // پوشه برای ذخیره فایل‌ها

    if (isset($_FILES["image"]) && $_FILES["image"]["error"] == 0) {
       
    $allowed_file_types = array('jpg', 'jpeg', 'png', 'gif');
        $file_name = basename($_FILES["image"]["name"]);
        $file_tmp = $_FILES["image"]["tmp_name"];
        $file_type = strtolower(pathinfo($file_name, PATHINFO_EXTENSION));

        if (in_array($file_type, $allowed_file_types)) {
            $new_file_name = uniqid() . "_" . $file_name; // نام جدید برای جلوگیری از تکراری
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
                http_response_code(500); // Internal Server Error
                echo json_encode($response);
            }
        } else {
            $response = ['error' => 'نوع فایل مجاز نیست.'];
            http_response_code(400); // Bad Request
            echo json_encode($response);
        }
    }

    if (isset($_POST["text"])) {
        $text = htmlspecialchars($_POST["text"]); // پاکسازی متن برای جلوگیری از XSS
        $response = ['message' => 'متن: ' . $text];
        echo json_encode($response);
    }

    if (!isset($_FILES["image"]) && !isset($_POST["text"])) {
        $response = ['error' => 'هیچ داده‌ای ارسال نشده است.'];
        http_response_code(400); // Bad Request
        echo json_encode($response);
    }
} else {
    $response = ['error' => 'متد درخواست نامعتبر است.'];
    http_response_code(405); // Method Not Allowed
    echo json_encode($response);
}
?>
