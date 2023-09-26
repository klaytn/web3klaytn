from base.testing import KlaytnBaseTesting


class TestEthGetHeaderByHash(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.blockHash = "0xb8deae63002d2b6aa33247c8ef545383ee0fd2282ac9b49dbbb74114389ddb5c"

    def test_post(self):
        self.response = self.w3.eth_other.get_header_by_hash(
            self.blockHash
        )
        if self.response is not None:
            self.assertRegex(self.response["hash"], r'^0x.*$')
        else:
            self.assertIsNone(self.response)

    def test_post_wrong_with_lack_paramaters(self):
        with self.assertRaises(ValueError):
            self.response = self.w3.eth_other.get_header_by_hash()

