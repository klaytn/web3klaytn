from base.testing import KlaytnBaseTesting


class TestGcStats(KlaytnBaseTesting):

    def test_post(self):
        debug_response = self.sdk.debug.gc_stats()

        self.covert_response(debug_response.response)
        self.assertResponseSuccess()
        self.assertIn("result", self.response)
