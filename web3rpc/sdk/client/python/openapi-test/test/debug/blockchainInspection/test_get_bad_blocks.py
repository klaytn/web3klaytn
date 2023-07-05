from base.testing import KlaytnBaseTesting


class TestDebugGetBadBlocks(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.w3.debug.get_bad_blocks()
        self.assertResponseSuccess()
