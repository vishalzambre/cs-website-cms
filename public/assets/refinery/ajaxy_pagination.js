(function() {

  this.init_ajaxy_pagination = function() {
    var pagination_pages;
    if (typeof window.history.pushState === "function" && $(".pagination_container").length > 0) {
      pagination_pages = $(".pagination_container .pagination a");
      pagination_pages.live("click", function(e) {
        var current_state_location, navigate_to;
        navigate_to = this.href.replace(/(\&(amp\;)?)?from_page\=\d+/, "");
        navigate_to += "&from_page=" + $(".current").text();
        navigate_to = navigate_to.replace("?&", "?").replace(/\s+/, "");
        current_state_location = location.pathname + location.href.split(location.pathname)[1];
        window.history.pushState({
          path: current_state_location
        }, "", navigate_to);
        $(document).paginateTo(navigate_to);
        return e.preventDefault();
      });
    }
    $(".pagination_container").applyMinimumHeightFromChildren();
    if ($(".pagination_container").find(".pagination").length === 0) {
      return $(".pagination_frame").css("top", "0px");
    }
  };

}).call(this);
