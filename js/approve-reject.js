AJS.toInit(function () {
    // Event handler for Approve button click
    AJS.$("#approve-action-link").click(function (e) {
        e.preventDefault();
        loadAndShowDialog("#approve-dialog");
    });

    // Event handler for Reject button click
    AJS.$("#reject-action-link").click(function (e) {
        e.preventDefault();
        loadAndShowDialog("#reject-dialog");
    });

    // Function to load and show the dialog in the servicedesk.portal.subheader section
    function loadAndShowDialog(dialogId) {
        AJS.$("#servicedesk-portal-subheader").html(AJS.$(dialogId).parent().html()); // Insert dialog HTML into subheader
        AJS.dialog2(dialogId).show(); // Show the dialog
    }

    // Event handler for Cancel buttons in both dialogs
    AJS.$(document).on("click", "#approve-cancel, #reject-cancel", function (e) {
        e.preventDefault();
        AJS.dialog2(AJS.$(this).closest('.aui-dialog2')).hide(); // Hide the current dialog
        AJS.$("#servicedesk-portal-subheader").empty(); // Clear dialog HTML from subheader
    });

    // Handle form submission for Approve and Reject
    AJS.$(document).on("click", "#approve-submit", function () {
        AJS.$("#approve-dialog form").submit();
    });

    AJS.$(document).on("click", "#reject-submit", function () {
        AJS.$("#reject-dialog form").submit();
    });
});
