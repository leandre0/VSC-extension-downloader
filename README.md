# VSC extension downloader

VSCode marketplace removed their manual extension download button, so this code takes a custom link with the extension name and publisher name in param and downloads the file

experimenting with beautiful soup to automatically parse the publisher name and extension name from the marketplace

maybe calling the url to check the status code before redirecting to it would be a great idea

ISSUES:
on some repositories the file is already available to download, and the custom link doesn't work so trying to download it directly if the custom link doesn't work might be a good option
