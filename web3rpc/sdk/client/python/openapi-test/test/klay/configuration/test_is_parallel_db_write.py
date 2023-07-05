from base.testing import KlaytnBaseTesting


class TestIsParallelDbWrite(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.w3.klay.is_parallel_db_write()
        self.assertEqual(self.response, True)
