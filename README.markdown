# Drupal.sugar #

## About ##

The Drupal.sugar is a plugin for the Mac text editor Espresso (macrabbit.com).  
It provides code sense and snippets for the Drupal API making a Drupal dev's life that much easier.  
(*Beware:* Currently only Drupal 6 is supported.)

This sugar is under (semi-)active development. Currently supported are:

- recognition of drupal files as php (module, install, profile)
- autocomplete of most API functions
- autocomplete of most common Drupal variables
- autocomplete for Drupal constants
- lookup
- form api snippets

## The version numbers ##

There are currently two branches:

- 1.x-6.1.x
- 2.x-6.1.x

The first number is the Espresso version (1.x or 2.x). After the dash is the Drupal version followed by the plugin version.

## Installation ##

- Choose one of the packages in the downloads section.
- Unzip
- Double click

Espresso will launch and install the sugar.

If you want the latest changes you can eiter  

1. Download the source (make sure everything is packaged in a folder called Drupal.sugar and double click the package).  
2. Clone the project to the folder ~/Library/Application Support/Espresso/Sugars/Drupal.sugar This way you can pull in the latest changes.


## Usage ##

Code sense will trigger for all Drupal documents (when looking at a document you can check this via the menu View > Language. Drupal PHP should be selected.)

When a Drupal document is active the actions dropdown will have an item Drupal. You can access snippets and actions throught this menu item.

### Form snippets ###

In the Drupal actions menu you will find al list of snippets for the most common form elements. Each snippet has a text trigger.

    textfield + TAB will expand to a $form['key'] = array(); with textfield data.
    
There is also a blank template for other elements

    blank + TAB
    
    
Form item properties also have custom triggers, but these are hidden from the menu.

    #value + TAB will expand to '#value' => '',
    #submit + TAB will expand to '#submit' => array(),
    
    fvalue + TAB will expand to $form['key']['#value'] = TRUE;
    fsubmit + TAB will expand to $form['#submit'] => array();

### Lookup ###

You can quickly lookup code in you default browser with the following shortcuts:

1. **command shift d** will search for the selected text on drupal.org
2. **command shift a** will serach for the selected text on api.drupal.org

If no text is selected you will go to each respective homepage.


## About the author ##

Drupal.sugar is written by Stijn De Meyere.
He is a freelance Drupal dev, who loves working with nice tools on the mac.

twitter.com/stijndm  
villaviscom.be


## Acknowledgments ##

Ian Beck for the quick support