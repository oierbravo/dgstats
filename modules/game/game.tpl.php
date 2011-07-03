<!--<pre><?php //dpm(get_defined_vars());?></pre>-->


<div class="game-continer">
<?php foreach($game as $key => $section){ ?>
    <div class="game-section-<?php print $key?>">
    <?php if(isset($section['#title'])){ ?>
     <h3>
     <?php print $section['#title']; ?>
     </h3>
    <?php } ?>
    <?php print $section['#output'];?>
    </div>
<?php }?>

</div>