$(document).ready(function() {
    $('input[type="checkbox"][name="filter"]').change(applyFilter);

    function applyFilter() {
        var selectedTags = $('input[type="checkbox"][name="filter"]:checked')
            .map(function() {
                return this.value;
            })
            .get();

        $(".project-item").each(function() {
            var itemTags = $(this).data("tags").split(" ");

            // 如果没有选中的标签，或项目的标签与选中的标签有交集，则显示项目，否则隐藏项目
            if (selectedTags.length === 0 || selectedTags.some(function(tag) { return itemTags.includes(tag); })) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    }

    // 默认情况下显示所有项目
    applyFilter();
});
