Drupal Ghost Stats.

Author: Oier Bravo Urtasun
License: AGPL3
Project URL:https://github.com/oierbravo/dgstats

Demo URL: http://alvicio.org (with acquia_marina theme)


DESCRIPTION:
  Drupal based Ghost++ stats. By now only supporting Dota games.
  Still unstable.
  
  Features:
    -All time statistics.
      -Players + search box block
      -Games
      -Heroes
      -Per player, game and hero pages
    -Bans + search box block
    -Player evolution charts.
  -Ban page + search block
  -Server status block(eurobattle, botprocess, numgames and lobby game) depends on PythonGhostOne for current game status
  -Bot stats block (totalgames,totalbans...)
  -Bot texts config page(welcome,gameloaded,gameover)
  -Widget for KDE4 showing one players stats.
  -Many Top/Record blocks
  -Realtime notifications of bots events.


REQUERIMENTES:
  -Drupal 6
  -Ghost MySQL setup.
  -IMPORTANT. Ghost and Drupal MUST be on the same database without prefixes(for easy installation XD).
  -Some features need read/write access to some files located in the bots dir.
     -To avoid security holes symlincs are strngly recommended.
  -Some features need access to php exec command.



BEFORE INSTALLATION:
  -A minimum Drupal knowlredge its required for installing and maintaining this module.
  -Drupal installation not covered.
  -Tested on: linux CentoOS and Ubuntu

INSTALLATION
  -Install drupal normally.
  -Install DGStats modules like normal Drupal modules.
  -Enable DGStats required modules.
  -(Optional)Configure Advanced features in http://yourdomain.com/config

NOTE ABOUT ICONS:
  -No time to create icons for this project, so free icons are taken. Still searching for better icons.


LICENSE
  -Affero GPL3 Licensed project.
  -Dota Items and Heros class/images taken from GStats++ project and are GPL3 licensed.

  -Icons are from several icon packs. Each pack has its own license provided in the same folder.