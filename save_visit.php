<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
header('Content-Type: application/json');

$counterFile = "counter.txt";
$fingerprintFile = "fingerprints.json";

if (!file_exists($counterFile)) {
    file_put_contents($counterFile, "1234");
}

if (!file_exists($fingerprintFile)) {
    file_put_contents($fingerprintFile, "[]");
}

$data = json_decode(file_get_contents("php://input"), true);
$fingerprint = isset($data["fingerprint"]) ? $data["fingerprint"] : null;

if (!$fingerprint) {
    http_response_code(400);
    echo json_encode(array("error" => "Brak fingerprintu"));
    exit;
}

$counter = (int)file_get_contents($counterFile);

$fingerprints = json_decode(file_get_contents($fingerprintFile), true);

if (!is_array($fingerprints)) {
    $fingerprints = array();
}

if (!in_array($fingerprint, $fingerprints)) {
    $fingerprints[] = $fingerprint;
    file_put_contents($fingerprintFile, json_encode($fingerprints, JSON_PRETTY_PRINT));
    $counter++;
    file_put_contents($counterFile, $counter);
}

echo json_encode(array("counter" => $counter));
exit;