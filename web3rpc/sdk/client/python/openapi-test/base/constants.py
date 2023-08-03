import os
from dotenv import load_dotenv

load_dotenv()

KLAYTN_URL = os.getenv('RPC')
BAOBAB_URL = os.getenv('BAOBAB_RPC')
GOVERNANCE_RPC = os.getenv('GOVERNANCE_RPC')
PN_RPC = os.getenv('PN_RPC')
HTTP_200_OK = os.getenv('HTTP_200_OK')
ERROR_CODE_INCORRECT_METHOD = os.getenv('ERROR_CODE_INCORRECT_METHOD')
ERROR_CODE_REQUIRE_ARGUMENT = os.getenv('ERROR_CODE_REQUIRE_ARGUMENT')
