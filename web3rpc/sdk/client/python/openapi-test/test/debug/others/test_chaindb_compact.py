from base.testing import KlaytnBaseTesting


class TestDebugChaindbCompact(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.w3.debug.chaindb_compact()
        self.assertResponseSuccess()
