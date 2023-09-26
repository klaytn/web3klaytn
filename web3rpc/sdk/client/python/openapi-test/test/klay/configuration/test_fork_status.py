from base.testing import KlaytnBaseTesting


class TestForkStatus(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.forkNumber = 20

    def test_post(self):
        self.response = self.w3.klay.fork_status(
            self.forkNumber
        )
        self.assertTrue(self.response >= 0)
