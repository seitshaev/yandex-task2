(function () {
    var elem = Element.prototype;

    if (!elem.hasClass)
        elem.hasClass = function (c) {
            var e = Array.prototype.slice.call(this.classList);
            c = c.split(' ');
            for (var i = 0; i < c.length; i++)
                if (!this.classList.contains(c[i]))
                    return false;
            return true;
        };

    if (!elem.addClass)
        elem.addClass = function (c) {
            c = c.split(' ');
            for (var i = 0; i < c.length; i++)
                if (!this.hasClass(c[i]))
                    this.classList.add(c[i]);
            return this;
        };

    if (!elem.removeClass)
        elem.removeClass = function (c) {
            var e = this.className.split(' ');
            c = c.split(' ');
            for (var i = 0; i < c.length; i++)
                if (this.hasClass(c[i]))
                    this.classList.remove(c[i]);
            return this;
        };

    if (!elem.toggleClass)
        elem.toggleClass = function (c) {
            c = c.split(' ');
            for (var i = 0; i < c.length; i++)
                this.classList.toggle(c[i]);
            return this;
        };
})();