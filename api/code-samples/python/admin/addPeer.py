import json
from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

url = "kni://a979fb575495b8d6db44f750317d0f4622bf4c2aa3365d6af7c284339968eef29b69ad0dce72a4d8db5ebb4968de0e3bec910127f134779fbcb0cb6d3331163c@10.0.0.1:32323"

sdk = OpenSDK(host)
admin_response = sdk.admin.add_peer(url)

print(json.loads(admin_response.response.data))
