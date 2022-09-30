<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Listing</title>
</head>
<body>
    <h1>Added</h1>

<!-- 
    NOTE: this is our backend (server side) code. 
    1. User cannot see this code.
    2. This is how we will do database opperations (db is also on server)
-->    

    <?php
        $firstname = $_GET['apiFirst'];
        echo "<p><strong>$firstname</strong> has been added.</p>"
    ?>

</body>
</html>
