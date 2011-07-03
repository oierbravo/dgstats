
<div class="player-container">
<?php foreach($player as $key => $section){ ?>
    <div class="player-section-<?php print $key?>">
    <?php if(isset($section['#title'])){ ?>
     <h3>
     <?php print $section['#title']; ?>
     </h3>
    <?php } ?>
    <?php print $section['#output'];?>
    </div>
<?php }?>

</div>
