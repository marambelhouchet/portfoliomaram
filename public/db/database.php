<?php
// Enable CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Check if it's an OPTIONS request (preflight request)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Database connection parameters
$servername = "127.0.0.4";
$username = "root";
$password = "root";
$dbname = "contact";

// Check if the correct number of arguments are provided
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Extract POST data
    $postData = json_decode(file_get_contents("php://input"), true);
    
    // Validate POST data
    if (isset($postData['name']) && isset($postData['email']) && isset($postData['message'])) {
        $name = $postData['name'];
        $email = $postData['email'];
        $message = $postData['message'];

        // Create connection
        $conn = new mysqli($servername, $username, $password, $dbname);

        // Check connection
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        // Insert data into database
        $sql = "INSERT INTO contacts (name, email, message) VALUES ('$name', '$email', '$message')";
        if ($conn->query($sql) === TRUE) {
            echo json_encode(array("status" => "success"));
        } else {
            echo json_encode(array("status" => "error", "message" => $conn->error));
        }

        $conn->close();
    } else {
        echo json_encode(array("status" => "error", "message" => "Invalid data"));
    }
} else {
    echo json_encode(array("status" => "error", "message" => "Unsupported method"));
}
