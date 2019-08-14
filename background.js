'use strict';

chrome.downloads.onChanged.addListener(downloadDelta => {
  if (downloadDelta.state && downloadDelta.state.current === "complete") {
    setTimeout(chrome.browsingData.removeDownloads.bind(null, {}), 10000);
  }
});
