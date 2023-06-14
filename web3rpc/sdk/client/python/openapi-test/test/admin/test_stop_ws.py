from base.testing import KlaytnBaseTesting


class TestAdminStopWS(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.w3.geth.admin.stop_ws()
        self.assertResponseSuccess()
