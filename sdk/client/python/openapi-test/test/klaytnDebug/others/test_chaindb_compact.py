from base.testing import KlaytnBaseTesting


class TestDebugChaindbCompact(KlaytnBaseTesting):

    def test_post(self):
        debug_response = self.sdk.debug.chaindb_compact()

        self.covert_response(debug_response.response)
        self.assertResponseSuccess()
        self.assertIn("jsonrpc", self.response)
        self.assertIn("id", self.response)
        self.assertIn("result", self.response)
