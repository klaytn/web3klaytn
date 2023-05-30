from base.testing import KlaytnBaseTesting


class TestIsParallelDbWrite(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.sdk.klay.is_parallel_db_write()
        self.assertResponseSuccess()
