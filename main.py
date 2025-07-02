import requests 
import os

def url_creator(publisher, extension_name):
    return f'https://{publisher}.gallery.vsassets.io/_apis/public/gallery/publisher/{publisher}/extension/{extension_name}/latest/assetbyname/Microsoft.VisualStudio.Services.VSIXPackage'

def main():
    save_directory = os.path.dirname(__file__)
    # base url will, in the end, be the only input needed
    # base_url = input("Please enter the base url from which the file will be downloaded: ")
    publisher = input("Please enter the publisher's name: ")
    extension_name = input("Please enter the extension's name: ")

    url_creator(publisher, extension_name)

    try:
        response = requests.get(
            'https://ms-azuretools.gallery.vsassets.io/_apis/public/gallery/publisher/ms-azuretools/extension/vscode-containers/latest/assetbyname/Microsoft.VisualStudio.Services.VSIXPackage',
        )
    except:
        return f'Sorry, an error has occured'
    
    if response.status_code == 200:
        with open(save_directory, 'wb') as f:
            f.write(response.content)
    else: 
        print("An error has occured")


main()