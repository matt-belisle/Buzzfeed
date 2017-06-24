/**
 * Created by Matt on 6/23/2017.
 */
var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i]; //get elements
    //search through element's child nodes
    for (var j = 0; j < element.childNodes.length; j++) {
        var childElement = element.childNodes[j];

        if (childElement.nodeType === 3) {
            var text = childElement.nodeValue;
            var afterReplacement = text.replace(/buzzfeed/gi, 'Probably Stolen From Reddit');
            if (afterReplacement !== text) {
                element.replaceChild(document.createTextNode(afterReplacement), childElement);
            }
        }
    }
}