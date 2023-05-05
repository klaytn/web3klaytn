from base.testing import KlaytnBaseTesting


class TestKlayGetHeaderByHash(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.blockHash = "0xba647d41423faeebe8a7c64737d284fc2eba6f0388a3e1ebf6243db509ec1577"

    def test_post(self):
        klay_response = self.sdk.klay.get_header_by_hash(
            self.blockHash
        )

        self.covert_response(klay_response.response)
        self.assertResponseSuccess()
        self.assertIn("result", self.response)

    def test_post_wrong_with_lack_paramaters(self):
        klay_response = self.sdk.klay.get_header_by_hash()

        self.covert_response(klay_response.response)
        self.assertResponseSuccess()
        self.assertIn("error", self.response)
        self.assertErrorCodeMissingRequiredArgument()
