import * as $ from "jquery";

/**
 * Replaces an <img> with an SVG and inlines the SVG in the markup.
 * You want to do this if you need to style the SVG with CSS.
 *
 * Taken from http://stackoverflow.com/a/24933495/367051
 *
 * Modified to check for a "data-inline" attribute. If this is set to
 * "false" then the SVG image is *not* inlined.
 *
 * The function signature comes from jquery(selector).each().
 */
export function inlineSvg(index: number, img: HTMLElement) {
  console.log(`Inlining ${img}`);
  var $img = $(img);

  if ($img.attr("data-inline") === "false") {
    return;
  }

  var imgID = $img.attr("id");
  var imgClass = $img.attr("class");
  var imgURL = $img.attr("src");

  jQuery.get(imgURL, function(data) {
    // Get the SVG tag, ignore the rest
    var $svg = jQuery(data).find("svg");

    // Add replaced image's ID to the new SVG
    if(typeof imgID !== "undefined") {
        $svg = $svg.attr("id", imgID);
    }
    // Add replaced image's classes to the new SVG
    if(typeof imgClass !== "undefined") {
        $svg = $svg.attr("class", imgClass + " replaced-svg");
    }

    // Remove any invalid XML tags as per http://validator.w3.org
    $svg = $svg.removeAttr("xmlns:a");

    // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
    if(!$svg.attr("viewBox") && $svg.attr("height") && $svg.attr("width")) {
        $svg.attr("viewBox", "0 0 " + $svg.attr("height") + " " + $svg.attr("width"));
    }

    // Replace image with new SVG
    $img.replaceWith($svg);

  }, "xml");
}
