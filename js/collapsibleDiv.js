var coll = document.getElementsByClassName("card-button");
var i;

for (i = 0; i < coll.length; i++) {

    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.previousElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
            this.firstChild.nodeValue = "View More";
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
            this.firstChild.nodeValue = "View Less";
        }
    });
}