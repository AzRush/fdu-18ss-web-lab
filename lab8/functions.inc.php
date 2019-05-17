<?php

    function outputOrderRow($file, $title, $quantity, $price) {
        echo "<tr>";
        //TODO
        echo "<td><img src=images\books\\tinysquare\\" . $file . "></td>";
        echo "<td><p style='text-align: left'>" . $title . "</p></td>";
        echo "<td><p>" . $quantity . "</p></td>";
        echo "<td><p>$" . number_format($price,2) . "</p></td>";
        echo "<td><p>$" .number_format($price * $quantity,2) . "</p></td>";
        echo "</tr>";
    }
?>