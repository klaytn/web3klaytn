from base.testing import KlaytnBaseTesting
import unittest


class TestAdminStopHTTP(KlaytnBaseTesting):

    @unittest.skip
    def test_post(self):
        self.response = self.w3.geth.admin.stop_http()
        self.assertResponseSuccess()
