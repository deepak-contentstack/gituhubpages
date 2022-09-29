const formatBytes = (bytes) => {
  if (bytes) {
    var marker = 1024;
    var decimal = 2;
    var kiloBytes = marker;
    var megaBytes = marker * marker;
    var gigaBytes = marker * marker * marker;
    var teraBytes = marker * marker * marker * marker;

    if (bytes < kiloBytes) return bytes + " Bytes";
    else if (bytes < megaBytes) return (bytes / kiloBytes).toFixed(decimal) + " KB";
    else if (bytes < gigaBytes) return (bytes / megaBytes).toFixed(decimal) + " MB";
    else return (bytes / gigaBytes).toFixed(decimal) + " GB";
  }
  else {
    return '0 bytes'
  }
};

const getAssetIconSmall = (type: any) => {
  let svgName = 'DOC2'
  if (type) {
    switch (true) {
      case type === 'folder':
        svgName = 'Folder';
        break;
      case type === 'pdf' || type === 'PDF':
        svgName = 'PDF2'
        break;
      case type === 'excel' || type == 'spreadsheet':
        svgName = 'XLS';
        break;
      case type === 'presentation' || type === 'ppt':
        svgName = 'PPT';
        break;
      case type === 'document':
        svgName = 'DOC2';
        break;
      case type === 'txt':
        svgName = 'TXT';
        break;
      case type === 'zip':
        svgName = 'ZIP';
        break;
      case type === 'mp4':
        svgName = 'MP4';
        break;
      case type === 'avi':
        svgName = 'AVI'
        break;
      case type === 'audio':
        svgName = 'MP3';
        break;
      case type === 'html':
        svgName = 'HTML2';
        break;
      case type === 'archive':
        svgName = 'ZIP';
        break;
      case type === 'json':
        svgName = 'JSON'
        break;
      case type === 'xml':
        svgName = 'XML'
        break;
      case type === 'javascript':
        svgName = 'JS'
        break
      case type === 'exe':
        svgName = 'EXE'
        break
      case type === 'csv':
        svgName = 'CSV'
        break
      case type === 'psd':
        svgName = 'PSD'
        break
      case type === 'rtf':
        svgName = 'RTF'
        break
      case type === 'ai':
        svgName = 'AI'
        break
      case type === 'css':
        svgName = 'CSS'
        break
    };
    if (type === 'image/tiff') {
      svgName = 'DocumentMedium';
    };
    return svgName;
  };
};

const getAssetIcon = (type: any) => {
  // let svgName = 'Document';
  let svgName = 'DOC2'
  if (type) {
    switch (true) {
      case type === 'folder':
        svgName = 'FolderLarge';
        break;
      case type === 'pdf' || type === 'PDF':
        svgName = 'PDF2'
        break;
      case type === 'excel' || type == 'spreadsheet':
        svgName = 'XLS';
        break;
      case type === 'presentation' || type === 'ppt':
        svgName = 'PPT';
        break;
      case type === 'document':
        svgName = 'DOC2';
        break;
      case type === 'txt':
        svgName = 'TXT';
        break;
      case type === 'zip':
        svgName = 'ZIP';
        break;
      case type === 'mp4':
        svgName = 'MP4';
        break;
      case type === 'avi':
        svgName = 'AVI'
        break;
      case type === 'audio':
        svgName = 'MP3';
        break;
      case type === 'html':
        svgName = 'HTML2';
        break;
      case type === 'archive':
        svgName = 'ZIP';
        break;
      case type === 'json':
        svgName = 'JSON'
        break;
      case type === 'xml':
        svgName = 'XML'
        break;
      case type === 'javascript':
        svgName = 'JS'
        break
      case type === 'exe':
        svgName = 'EXE'
        break
      case type === 'csv':
        svgName = 'CSV'
        break
      case type === 'psd':
        svgName = 'PSD'
        break
      case type === 'rtf':
        svgName = 'RTF'
        break
      case type === 'ai':
        svgName = 'AI'
        break
      case type === 'css':
        svgName = 'CSS'
        break
    };
    if (type === 'image/tiff') {
      svgName = 'Document';
    };
    return svgName;
  };
};

const classCreator = (height, width, type) => {
  if (height && width && type === 'image') {
    if (height < 178 && width < 178) {
      return 'AssetCard__asset--image__image-small'
    }
    if (height < 178 && width >= 178) {
      return 'AssetCard__asset--image__image-small'
    }
    if (height >= 178 && width < 178) {
      return 'AssetCard__asset--image__image-small'
    }
  }
  return '';
}
const createNodeMock = (element) => {
  if (element.type === 'div') {
    // This is your fake DOM node for <p>.
    // Feel free to add any stub methods, e.g. focus() or any
    // other methods necessary to prevent crashes in your components.
    return {};
  }
  // You can return any object from this method for any type of DOM component.
  // React will use it as a ref instead of a DOM node when snapshot testing.
  return null;
}


export { formatBytes, getAssetIcon, getAssetIconSmall, classCreator, createNodeMock };
export * from './hooks'