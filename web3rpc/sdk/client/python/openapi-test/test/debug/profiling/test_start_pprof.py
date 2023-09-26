from base.testing import KlaytnBaseTesting


class TestStartPProf(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.address = "localhost"
        self.port = 6060

    def test_post(self):
        self.response = self.w3.debug.start_p_prof(
            self.address, self.port
        )
        self.assertIsNone(self.response)
