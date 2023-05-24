from base.testing import KlaytnBaseTesting


class TestDebugChaindbCompact(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.sdk.debug.chaindb_compact()
        self.assertResponseSuccess()
