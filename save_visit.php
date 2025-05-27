<?php
$counterFile = "counter.txt";
$fingerprintFile = "fingerprints.json";

// Odbierz dane POST jako JSON
$data = json_decode(file_get_contents("php://input"), true);
$fingerprint = $data["fingerprint"] ?? null;

if (!$fingerprint) {
    http_response_code(400);
    echo json_encode(["error" => "Brak fingerprintu"]);
    exit;
}

// Wczytaj aktualną wartość licznika
$counter = file_exists($counterFile) ? (int)file_get_contents($counterFile) : 1234;

// Wczytaj istniejące fingerprinty
$fingerprints = file_exists($fingerprintFile) 
    ? json_decode(file_get_contents($fingerprintFile), true) 
    : [];

// Jeśli fingerprint jeszcze nie był zapisany, dodaj go
if (!in_array($fingerprint, $fingerprints)) {
    $fingerprints[] = $fingerprint;
    file_put_contents($fingerprintFile, json_encode($fingerprints));

    // Zwiększ licznik i zapisz nową wartość
    $counter++;
    file_put_contents($counterFile, $counter);
}

// Zwróć aktualną wartość licznika
header('Content-Type: application/json');
echo json_encode(["counter" => $counter]);