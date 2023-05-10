from base.testing import KlaytnBaseTesting


class TestAdminStopHTTP(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.sdk.admin.stop_http()
        self.assertResponseSuccess()
