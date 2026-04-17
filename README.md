# WebDev
** Route Names **
POST
    - /upload
        * Creates a new item entry

GET
    - /index
        * Initial Homepage
    - /upload
        * Form Page
    - /list
        * Shows all items
    - /items?material=VALUE
        * Returns filtered item based on material parameter

AJAX
    - /query
        * Sends request to /items?material=VALUE returns items

** Example Queries **
    * Yarn Example *
        Brand: I love this yarn
        Material: Yarn
        Color: Periwinkle
        Dye Lot: 538
        Amount: 7
        Bar Code: 12345
        Location: Bedroom shelf 3
        Date Added: 2026-04-16

    * Bead Example *
        Brand: Bead Treasures
        Material: Glass Beads
        Color: Confetti
        Dye Lot: 18
        Amount: 50
        Bar Code: 67891
        Location: Cabinet shelf 2
        Date Added: 2026-04-12