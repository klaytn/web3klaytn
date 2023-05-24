from base.testing import KlaytnBaseTesting


class TestDebugGetBadBlocks(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.sdk.debug.get_bad_blocks()
        self.assertResponseSuccess()
