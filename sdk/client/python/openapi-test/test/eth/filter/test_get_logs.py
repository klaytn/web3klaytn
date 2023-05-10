from base.testing import KlaytnBaseTesting


class TestEthGetLogs(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.filterOptions = {
            "fromBlock": "latest",
            "toBlock": "latest",
            "address": "0x87ac99835e67168d4f9a40580f8f5c33550ba88b"
        }

    def test_post(self):
        self.response = self.sdk.eth.get_logs(
            self.filterOptions
        )
        self.assertResponseSuccess()

    def test_post_wrong_with_lack_paramaters(self):
        self.response = self.sdk.eth.get_logs()
        self.assertErrorCodeMissingRequiredArgument()
