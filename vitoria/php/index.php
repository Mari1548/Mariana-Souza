<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>php menon</title>
    <link rel="stylesheet" href="../css/estilo.css">
</head>
<body>
    <?php
    $nome = $_GET ["nome"];
    $nome = $_GET ["idade"];
    
    echo "<p>$nome $idade</p>";
    ?>
</body>
</html>