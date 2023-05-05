from base.testing import KlaytnBaseTesting


class TestDebugStorageRangeAt(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.blockHash = "0x90c81195698bc9f282bbdec386b0afb4dcc28e43aae834894281c3ecb3c88d21"
        self.txIndex = 1
        self.address = "0x73a7d19d14f7dfac5b799e405e22133b2adc57a6"
        self.keyStart = "0x12"
        self.maxResult = 1

    def test_post(self):
        debug_response = self.sdk.debug.storage_range_at(
            self.blockHash, self.txIndex, self.address, self.keyStart, self.maxResult
        )

        self.covert_response(debug_response.response)
        self.assertResponseSuccess()
        self.assertIn("result", self.response)

    def test_post_wrong_with_lack_paramaters(self):
        debug_response = self.sdk.debug.storage_range_at(self.blockHash)

        self.covert_response(debug_response.response)
        self.assertResponseSuccess()
        self.assertIn("error", self.response)
        self.assertErrorCodeMissingRequiredArgument()
