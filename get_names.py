from urllib.request import urlopen

http = urlopen('https://docs.google.com/document/d/1GHE9qihRy--L4RceqxUrUEgwW_MFhSSHrA8gpd-m84I/edit').read()
print(http.decode('utf-8'))