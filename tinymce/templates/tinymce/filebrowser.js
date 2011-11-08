function djangoFileBrowser(field_name, url, type, win) {
    var filter_type = "";

    switch(type) {
        case 'image': filter_type = "Image"; break;
        case 'media': filter_type = "Video"; break;
    }

    var url = "{{ fb_url }}?pop=2&type=" + type + "&filter_type=" + filter_type;

    tinyMCE.activeEditor.windowManager.open(
        {
            'file': url,
            'width': 820,
            'height': 500,
            'resizable': "yes",
            'scrollbars': "yes",
            'inline': "no",
            'close_previous': "no"
        },
        {
            'window': win,
            'input': field_name,
            'editor_id': tinyMCE.selectedInstance.editorId
        }
    );
    return false;
}
