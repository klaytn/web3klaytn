import json
from opensdk.sdk import OpenSDK

host = "https://api.baobab.klaytn.net:8651"

message = "0xdead"
signature = "0xccb8cce176b01fdc8f7ac3c101b8eb3b9005e938a60800e517624419dd8b7fba0e4598bdf1c4fa1743e1288e89b8b7090cc11f4b3640aafcbc71896ec73eec241b"

sdk = OpenSDK(host)
personal_response = sdk.personal.ec_recover(message, signature)

print(json.loads(personal_response.response.data))
