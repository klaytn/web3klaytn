from base.testing import KlaytnBaseTesting


class TestDebugGetModifiedStorageNodesByNumber(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.address = "0x73a7d19d14f7dfac5b799e405e22133b2adc57a6"
        self.startBlockNum = 100
        self.endBlockNum = 200

    def test_post(self):
        self.response = self.sdk.debug.get_modified_storage_nodes_by_number(
            self.address, self.startBlockNum, self.endBlockNum
        )
        self.assertResponseSuccess()

    def test_post_wrong_with_lack_paramaters(self):
        self.response = self.sdk.debug.get_modified_storage_nodes_by_number(self.address)
        self.assertErrorCodeMissingRequiredArgument()
