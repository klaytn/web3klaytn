from base.testing import KlaytnBaseTesting


class TestDebugGetModifiedAccountsByNumber(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.startBlockNum = 171904
        self.endBlockNum = 172160

    def test_post(self):
        debug_response = self.sdk.debug.get_modified_accounts_by_number(
            self.startBlockNum, self.endBlockNum
        )

        self.covert_response(debug_response.response)
        self.assertResponseSuccess()
        self.assertIn("jsonrpc", self.response)
        self.assertIn("id", self.response)
        self.assertIn("result", self.response)

    def test_post_wrong_with_lack_paramaters(self):
        debug_response = self.sdk.debug.get_modified_accounts_by_number()

        self.covert_response(debug_response.response)
        self.assertResponseSuccess()
        self.assertIn("jsonrpc", self.response)
        self.assertIn("id", self.response)
        self.assertIn("error", self.response)
        self.assertErrorCodeMissingRequiredArgument()
