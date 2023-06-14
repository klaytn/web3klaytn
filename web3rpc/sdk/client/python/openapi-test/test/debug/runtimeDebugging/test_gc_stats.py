from base.testing import KlaytnBaseTesting


class TestGcStats(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.w3.debug.gc_stats()
        self.assertResponseSuccess()
