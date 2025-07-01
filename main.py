def main():
    publisher = input("Please enter the publisher's name: ")
    extension_name = input("Please enter the extension's name: ")
    print(extension_name, publisher)
    print(f'https://{publisher}.gallery.vsassets.io/_apis/public/gallery/publisher/{publisher}/extension/{extension_name}/latest/assetbyname/Microsoft.VisualStudio.Services.VSIXPackage')
    
main()