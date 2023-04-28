from base.testing import KlaytnBaseTesting


class TestKlayGetStorageAt(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.address = "0x295a70b2de5e3953354a6a8344e616ed314d7251"
        self.position = "0x0"
        self.blockHash = "latest"

    def test_post(self):
        klay_response = self.sdk.klay.get_storage_at(
            self.address, self.position, self.blockHash
        )

        self.covert_response(klay_response.response)
        self.assertResponseSuccess()
        self.assertIn("result", self.response)

    def test_post_wrong_with_lack_paramaters(self):
        klay_response = self.sdk.klay.get_storage_at(self.blockHash)

        self.covert_response(klay_response.response)
        self.assertResponseSuccess()
        self.assertIn("error", self.response)
        self.assertErrorCodeMissingRequiredArgument()
