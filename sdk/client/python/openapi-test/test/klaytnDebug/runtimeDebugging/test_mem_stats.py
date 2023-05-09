from base.testing import KlaytnBaseTesting


class TestDebugMemStats(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.sdk.debug.mem_stats()
        self.assertResponseSuccess()
