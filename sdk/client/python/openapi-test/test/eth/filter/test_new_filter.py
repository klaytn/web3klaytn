from base.testing import KlaytnBaseTesting


class TestEthNewFilter(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.filterOptions = {
            "fromBlock": "earliest",
            "toBlock": "latest",
            "address": "0x87ac99835e67168d4f9a40580f8f5c33550ba88b",
            "topics": ["0xd596fdad182d29130ce218f4c1590c4b5ede105bee36690727baa6592bd2bfc8"]
        }

    def test_post(self):
        self.response = self.sdk.eth.new_filter(
            self.filterOptions
        )
        self.assertResponseSuccess()

    def test_post_wrong_with_lack_paramaters(self):
        self.response = self.sdk.eth.new_filter()
        self.assertErrorCodeMissingRequiredArgument()
