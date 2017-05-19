function initJsonData() {
    if (window.sessionStorage) {
        var xmpMetadataJsonObj = JSON.parse(sessionStorage.getItem('xmpMetadataJsonStr'));

        $('#xmp-title-input').val(xmpMetadataJsonObj.Settings.Title);

        $('#xmp-category-input').val(xmpMetadataJsonObj.Settings.Category);

        $('#xmp-sub-input').val(xmpMetadataJsonObj.Settings.Subcategories);

        $('#xmp-description-input').val(xmpMetadataJsonObj.Settings.Description);

        $('#xmp-user-input').val(xmpMetadataJsonObj.Settings.User);

        $('#xmp-date-input').val(xmpMetadataJsonObj.Settings.Date);

        $('#xmp-location-input').val(xmpMetadataJsonObj.Settings.Location);

        $('#xmp-sublocation-input').val(xmpMetadataJsonObj.Settings.SubLocation);

        
    }
    else {
        alert("浏览器不支持SessionStorage")
    }
}



function initClick() {

}

